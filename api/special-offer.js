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
      const result = await pool.query('SELECT * FROM special_offers WHERE id = 1;');
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'No special offer configured' });
      }
      const r = result.rows[0];
      return res.status(200).json({
        active: r.active,
        title: r.title,
        subtitle: r.subtitle,
        price: parseFloat(r.price),
        oldPrice: parseFloat(r.old_price),
        endTime: r.end_time,
        badge: r.badge,
        discountBadge: r.discount_badge,
        image: r.image
      });
    } catch (err) {
      console.error('Error fetching special offer:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
  }

  if (req.method === 'POST') {
    try {
      const o = req.body;
      const q = `
        INSERT INTO special_offers (id, active, title, subtitle, price, old_price, end_time, badge, discount_badge, image, updated_at)
        VALUES (1, $1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
        ON CONFLICT (id) DO UPDATE SET
          active = EXCLUDED.active,
          title = EXCLUDED.title,
          subtitle = EXCLUDED.subtitle,
          price = EXCLUDED.price,
          old_price = EXCLUDED.old_price,
          end_time = EXCLUDED.end_time,
          badge = EXCLUDED.badge,
          discount_badge = EXCLUDED.discount_badge,
          image = EXCLUDED.image,
          updated_at = NOW()
        RETURNING *;
      `;
      const values = [
        o.active !== false,
        o.title,
        o.subtitle,
        o.price,
        o.oldPrice,
        o.endTime,
        o.badge,
        o.discountBadge || 'SAVE 34%',
        o.image
      ];
      const result = await pool.query(q, values);
      return res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error updating special offer:', err);
      return res.status(500).json({ error: 'Database update failed' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
