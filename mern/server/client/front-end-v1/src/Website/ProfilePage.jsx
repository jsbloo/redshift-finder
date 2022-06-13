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
            <br />
            <a href="/ById">Have a person ID?</a>
        </>
    );
};

export default ProfilePage;
