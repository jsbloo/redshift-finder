import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Button from "react-bootstrap/esm/Button";

import Search from "./Search";

const ProfilePage = () => {
    return (
        <>
            <br />
            <h2>Find A Citizen</h2>
            <br />
            <br />
            <Search />
            <br />
            <br />
        </>
    );
};

export default ProfilePage;
