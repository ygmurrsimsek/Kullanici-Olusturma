// CustomerList.jsx
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
export default function CustomerList({ customers, kullaniciSil, KullaniciDüzenle }) {
    console.log(customers);  // customers'ı kontrol etmek için

    if (!Array.isArray(customers)) {
        return <div>Error: customers is not an array</div>;
    }

    return (
        <div>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginRight: '48px' }}>
                {customers.map((customer) => {
                    const { id, name } = customer;  // Müşteriden id ve name'i al
                    return (
                        <li key={id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <img
                                    src={`https://i.pravatar.cc/150?img=${id}`}
                                    alt={name}
                                    style={{ borderRadius: '50%', height: '50px', marginRight: '20px' }}
                                />
                                {
                                    customer.isEditing ? (<input value={customer.name} onChange={(e) => KullaniciDüzenle(id, e.target.value)} ></input>) : <span>{name}</span>
                                }
                            </div>
                            <div >
                                <MdDelete style={{ cursor: 'pointer', width: '20px', height: '20px', marginRight: '3px' }} onClick={() => kullaniciSil(id)} />
                                <FaUserEdit style={{ cursor: 'pointer', width: '30px' }} onClick={() => KullaniciDüzenle(id, name)} />
                                {/* şimdi yapılacak işlem düzenleme inputunu ayarlamak ve düzenlemeye basıncaonaylama iconunun gelmesi */}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
