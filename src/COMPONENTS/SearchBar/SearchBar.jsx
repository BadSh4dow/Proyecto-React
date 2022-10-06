import React from "react"

const SearchBar = () => {

return (
    <form>
        <input
            className="input"
            type={'text'}
            placeholder={'🔎 Buscar'}
            pattern={'[A-Za-z0-9- ]+'}
            title={'Only letters, numbers, and hypens are accepted'}
            spellcheck={'false'}
        />
    </form>
)

}

export default SearchBar