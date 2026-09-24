const pool = require('./db');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC;');
      // Map back to frontend expected structure
      const orders = result.rows.map(r => ({
        id: r.id,
        date: r.date,
        customerName: r.customer_name,
        phone: r.phone,
        governorate: r.governorate,
        city: r.city,
        address: r.address,
        notes: r.notes,
        items: typeof r.items === 'string' ? JSON.parse(r.items) : r.items,
        subtotal: parseFloat(r.subtotal),
        discount: parseFloat(r.discount || 0),
        shipping: parseFloat(r.shipping || 0),
        total: parseFloat(r.total),
        status: r.status,
        statusLabel: r.status_label
      }));
      return res.status(200).json(orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
  }

  if (req.method === 'POST') {
    try {
      const o = req.body;
      const q = `
        INSERT INTO orders (id, date, customer_name, phone, governorate, city, address, notes, items, subtotal, discount, shipping, total, status, status_label)
        VALUES ($1, CURRENT_DATE, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *;
      `;
      const values = [
        o.id,
        o.customerName,
        o.phone,
        o.governorate,
        o.city,
        o.address,
        o.notes || '',
        JSON.stringify(o.items || []),
        o.subtotal,
        o.discount || 0,
        o.shipping || 0,
        o.total,
        o.status || 'new',
        o.statusLabel || 'New Order'
      ];
      const result = await pool.query(q, values);
      return res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('Error inserting order:', err);
      return res.status(500).json({ error: 'Failed to create order in database' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { id, status } = req.body;
      const statusLabels = {
        new: 'New Order',
        crafting: 'In Crafting & Prep',
        shipping: 'Out with Courier',
        delivered: 'Delivered & Collected',
        cancelled: 'Cancelled'
      };
      const label = statusLabels[status] || status;
      await pool.query('UPDATE orders SET status = $1, status_label = $2 WHERE id = $3;', [status, label, id]);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Error updating order:', err);
      return res.status(500).json({ error: 'Failed to update order status' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const id = req.query.id || (req.body && req.body.id);
      if (id) {
        await pool.query('DELETE FROM orders WHERE id = $1;', [id]);
        return res.status(200).json({ success: true });
      }
      return res.status(400).json({ error: 'Missing order id' });
    } catch (err) {
      console.error('Error deleting order:', err);
      return res.status(500).json({ error: 'Failed to delete order from database' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
