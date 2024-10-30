import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Register from './components/CustomerManagement/Register';
import PurchaseHistory from './components/CustomerManagement/PurchaseHistory';
import RequestItem from './components/CustomerManagement/RequestItem';
import CartManagement from './components/CustomerManagement/CartManagement';
import StockMonitoring from './components/InventoryManagement/StockMonitoring';
import StockManagement from './components/InventoryManagement/StockManagement';
import Invoice from './components/CashierSystem/Invoice';
import PaymentCheck from './components/CashierSystem/PaymentCheck';
import SalesHistory from './components/CashierSystem/SalesHistory';
import Payroll from './components/PayrollSystem/Payroll';
import BonusTHR from './components/PayrollSystem/BonusTHR';
import POMonitoring from './components/OrderManagement/POMonitoring';
import OrderManagement from './components/OrderManagement/OrderManagement';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Customer Management System</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/purchase-history">Purchase History</Link></li>
                        <li><Link to="/request-item">Request Item</Link></li>
                        <li><Link to="/cart-management">Cart Management</Link></li>
                        <li><Link to="/stock-monitoring">Stock Monitoring</Link></li>
                        <li><Link to="/stock-management">Stock Management</Link></li>
                        <li><Link to="/invoice">Invoice</Link></li>
                        <li><Link to="/payment-check">Payment Check</Link></li>
                        <li><Link to="/sales-history">Sales History</Link></li>
                        <li><Link to="/payroll">Payroll</Link></li>
                        <li><Link to="/bonus-thr">Bonus & THR</Link></li>
                        <li><Link to="/po-monitoring">PO Monitoring</Link></li>
                        <li><Link to="/order-management">Order Management</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/purchase-history" component={PurchaseHistory} />
                    <Route path="/request-item" component={RequestItem} />
                    <Route path="/cart-management" component={CartManagement} />
                    <Route path="/stock-monitoring" component={StockMonitoring} />
                    <Route path="/stock-management" component={StockManagement} />
                    <Route path="/invoice" component={Invoice} />
                    <Route path="/payment-check" component={PaymentCheck} />
                    <Route path="/sales-history" component={SalesHistory} />
                    <Route path="/payroll" component={Payroll} />
                    <Route path="/bonus-thr" component={BonusTHR} />
                    <Route path="/po-monitoring" component={POMonitoring} />
                    <Route path="/order-management" component={OrderManagement} />
                    <Route path="/" exact>
                        <h2>Welcome to the Customer Management System</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
