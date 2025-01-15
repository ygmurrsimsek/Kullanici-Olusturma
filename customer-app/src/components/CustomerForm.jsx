import '../assets/css/CustomerForm.css';
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';
import CustomerList from './CustomerList';  // CustomerList component'ını import et

function CustomerForm() {
    const [newCustomer, setNewCustomer] = useState(""); // input değerini tutmak için
    const [customers, setCustomers] = useState([]); // müşteri listesini tutmak için

    const kullaniciSil = (id) => {
        setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== id));  // Silinen müşteriyi listeden çıkar
    }

    const KullaniciDüzenle = (id, newName) => {
        setCustomers(prevCustomers => prevCustomers.map(customer => customer.id === id ? { ...customer, name: newName, isEditing: true } : customer));
    }

    const handleAddCustomer = (event) => {
        event.preventDefault(); // Formun otomatik submit olmasını engelle

        if (newCustomer.trim()) {
            const newCustomerObj = {
                id: customers.length + 1,  // Yeni müşteri için id atama
                name: newCustomer
            };
            setCustomers(prevCustomers => [...prevCustomers, newCustomerObj]);  // Yeni müşteri ekle
            setNewCustomer("");  // Inputu sıfırla
        }
    };

    return (
        <div>
            <form onSubmit={handleAddCustomer}>
                <input
                    type="text"
                    value={newCustomer}
                    onChange={(e) => setNewCustomer(e.target.value)}
                    className='input'
                    placeholder="Add a new customer"
                />
                <button className='button' type='submit'>
                    <IoMdAdd />
                </button>
            </form>

            {/* CustomerList component'ını doğru şekilde çağır */}
            <CustomerList customers={customers} kullaniciSil={kullaniciSil} KullaniciDüzenle={KullaniciDüzenle} />
        </div>
    );
}

export default CustomerForm;
