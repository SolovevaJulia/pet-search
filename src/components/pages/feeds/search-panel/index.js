import Search from "./search";
import TagFilter from "./tag-filter";

const SearchPanel = () => {
    return (
        <div className="row mt-5 mb-5 d-flex align-items-center">
            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-12  mb-3">
                <Search />
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6  col-12 mb-3">
                <TagFilter />
            </div>
        </div>
    );
};

export default SearchPanel;
