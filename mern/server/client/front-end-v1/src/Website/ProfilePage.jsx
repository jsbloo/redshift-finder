import Search from "./Search";

const ProfilePage = () => {
    return (
        <>
            <br />
            <h2>Find A Person</h2>
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
