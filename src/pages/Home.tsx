import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface UserInfo {
    name: string,
    gender: string,
    lang: string
}


const Home: React.FC = () => {

    const history = useHistory();

    const [user, setUser] = useState<UserInfo>({
        name: "",
        gender: "",
        lang: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        console.log(user)
        history.push({
            pathname: "/exam",
            state: user
        })
    }
    

    return (
        <div data-testid="home">
            <h2>Online MCQ</h2>
            <form
            onSubmit={handleSubmit}>
                <div>
                    <TextField
                        name="name"
                        value={user.name}
                        variant="outlined"
                        placeholder="Enter Your Name"
                        onChange={handleInputChange}
                        sx={{width: "25%", marginBottom: "30px"}}
                    />
                </div>
                <div>
                    <TextField
                        select
                        label="Select Gender"
                        name="gender"
                        value={user.gender}
                        onChange={handleInputChange}
                        sx={{width: "25%", marginBottom: "30px", textAlign: "left"}}
                    >
                        <MenuItem key="Male" value="Male">
                            Male
                        </MenuItem>
                        <MenuItem key="Female" value="Female">
                            Female
                        </MenuItem>

                    </TextField>
                </div>
                <div>
                    <TextField
                        select
                        label="Select Language"
                        name="lang"
                        value={user.lang}
                        onChange={handleInputChange}
                        sx={{width: "25%", marginBottom: "30px", textAlign: "left"}}
                    >
                        <MenuItem key="Java" value="Java">
                            Java
                        </MenuItem>
                        <MenuItem key="NodeJS" value="NodeJS">
                            NodeJS
                        </MenuItem>

                    </TextField>
                </div>
                <Button sx={{width: "25%"}} size="large" type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default Home;