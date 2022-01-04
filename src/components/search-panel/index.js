import Search from "./search";
import TagFilter from "./tag-filter";
import AddPost from "../add-post/add-post";

const SearchPanel = () =>  {
    return(
        <div className="container">
            <div className="row mt-5 mb-5 d-flex align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12  mb-3">
                    <Search/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6  col-12 mb-3">
                    <TagFilter/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12  col-12  mb-3">
                    <AddPost/>
                </div>
            </div>
        </div>
    )
}

export default SearchPanel