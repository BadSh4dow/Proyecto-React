import React from "react"

const SearchBar = (props) => {

return (

    <div className="searchBar">
    <form>
        <input
            className="input"
            type={'text'}
            placeholder={'🔎 Buscar'}
            pattern={'[A-Za-z0-9- ]+'}
            title={'Only letters, numbers, and hypens are accepted'}
            value={props.searchValue}
            onChange={(e)=>props.setSearchValue(e.target.value)}
        />
    </form>
    </div>
)

}

export default SearchBar