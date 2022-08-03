import {Routes, Route} from "react-router-dom";

import './App.css';
import {
    AlbumsPage,
    Layout, PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostPage,
    UserDetailsPage,
    UserPostPage,
    UsersPage
} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
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