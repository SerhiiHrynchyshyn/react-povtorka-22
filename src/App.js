import {Routes, Route} from "react-router-dom";

import './App.css';
import {Layout, PostCommentsPage, PostDetailsPage, PostPage, UserDetailsPage, UserPostPage, UsersPage} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>

        </>
    );
}

export default App;