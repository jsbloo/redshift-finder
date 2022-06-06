const Profile = ({data}) => {

    const {first_name, surname, home_address, date_of_birth, place_of_birth, sex} = data;

    return ( 
        <>
            <h2> Name: {first_name} {surname}</h2>
            <h3> Address: {home_address} </h3>
            <h3> Date of Birth: {date_of_birth} </h3>
            <h3> Place of Birth: {place_of_birth} </h3>
            <h3> Gender: {sex} </h3>
            
            <ol>
        
            </ol>

        </>
     );
}
 
export default Profile;