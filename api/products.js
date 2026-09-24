const pool = require('./db');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC;');
      return res.status(200).json(result.rows);
    } catch (err) {
      console.error('Error fetching products:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
  }

  if (req.method === 'POST') {
    try {
      const p = req.body;
      if (!p.id || !p.title || !p.price) {
        return res.status(400).json({ error: 'Missing required product fields' });
      }

      const q = `
        INSERT INTO products (id, title, category, category_name, price, old_price, tag, tag_type, rating, reviews_count, image, description, colors, sizes)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          price = EXCLUDED.price,
          image = EXCLUDED.image,
          description = EXCLUDED.description
        RETURNING *;
      `;
      const values = [
        p.id,
        p.title,
        p.category || 'helmets',
        p.categoryName || 'Helmet Covers',
        p.price,
        p.oldPrice || p.price,
        p.tag || 'NEW DROP ⚡',
        p.tagType || 'tag-hot',
        p.rating || 5.0,
        p.reviewsCount || 1,
        p.image,
        p.description || '',
        JSON.stringify(p.colors || []),
        JSON.stringify(p.sizes || ['Universal Stretch'])
      ];

      const result = await pool.query(q, values);
      return res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('Error inserting product:', err);
      return res.status(500).json({ error: 'Failed to insert product into database' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
