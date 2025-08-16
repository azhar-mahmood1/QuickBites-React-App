import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";
import { toast } from 'react-toastify';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editData, setEditData] = useState({ name: '', category: '', price: '' });

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching list");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    if (response.data.success) {
      toast.success(response.data.message);
      fetchList();
    } else {
      toast.error("Error removing food");
    }
  };

  const handleEditClick = (item) => {
    setEditItemId(item._id);
    setEditData({
      name: item.name,
      category: item.category,
      price: item.price
    });
  };

  const handleEditChange = (e) => {
    setEditData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const saveEdit = async () => {
    try {
      const response = await axios.post(`${url}/api/food/update`, {
        id: editItemId,
        ...editData
      });
      if (response.data.success) {
        toast.success("Item updated");
        setEditItemId(null);
        fetchList();
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>

      {list.map((item, index) => (
        <div key={index} className="list-table-format">
          <img src={`${url}/images/${item.image}`} alt="" />

          {editItemId === item._id ? (
            <>
              <input type="text" name="name" value={editData.name} onChange={handleEditChange} />
              <input type="text" name="category" value={editData.category} onChange={handleEditChange} />
              <input type="number" name="price" value={editData.price} onChange={handleEditChange} />
              <div>
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditItemId(null)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <div>
                <span onClick={() => handleEditClick(item)} className='cursor'>✏️</span>&nbsp;
                <span onClick={() => removeFood(item._id)} className='cursor'>❌</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
