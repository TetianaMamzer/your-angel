"use client";
import style from "./SearchModalItem.module.scss";


const SearchModalItem = ({ bouquetsItem }) => {

    
    const elements = bouquetsItem.map((item) => (
      <li key={item.id} >
          <div >
            <h3>{item.name}</h3>
          </div>
      </li>
    ));
    return (
      <div>
        <ul>{elements}</ul>
      </div>
    );
};

export default SearchModalItem;