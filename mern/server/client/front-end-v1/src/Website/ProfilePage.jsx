import Search from "./Search";

const ProfilePage = () => {
    return (
        <div id="profileBackground">
            <br />
            <h2 id="titleFont">Find A Person</h2>
            <br />
            <br />
            <Search schema={"persons"}/>
            <br />
        </div>
    );
};

export default ProfilePage;
