import { UseAuth } from '../Auth/AuthComponents/UseAuth'
const Dashboard = () => {
const { user } = UseAuth();


    return (
        <div>
            <h1>Dashboard</h1>
            {user ? user .displayName : <>not logged in</>}
        </div>
    );
};

export default Dashboard;