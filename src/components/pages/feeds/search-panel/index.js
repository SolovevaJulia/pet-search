import Search from "./search";
import TagFilter from "./tag-filter";
import CitySelect from "./city-select";

const SearchPanel = () => {
    return (
        <div className="row mt-5 mb-5 d-flex align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-4 col-sm-12 col-12  mb-3">
                <Search />
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6  col-12 mb-3">
                <TagFilter />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6  col-12 mb-3">
                <CitySelect />
            </div>
        </div>
    );
};

export default SearchPanel;
