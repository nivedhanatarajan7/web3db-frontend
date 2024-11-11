import Navbar from "../components/Navbar";

const MyProfile = () => {
    return (
        <div>
            <Navbar />
            <h1>My Portal</h1>
            <h2>Personal Information</h2>
            <div className="profilecard">
                <p>Name: {}</p> <br/>
                <p>Age: {}</p> <br/>
                <p>Height: {}</p> <br/>
                <p>Weight: {}</p> <br/>
            </div>

            <h2>Medical History</h2>
            <div className="profilecard">
                <ul>
                    <li>Condition 1</li>
                    <li>Condition 2</li>
                    <li>Condition 3</li>
                </ul>
                <button className="add">Add Medical Condition</button>
            </div>


            <br/>
        </div>
    )
}

export default MyProfile;