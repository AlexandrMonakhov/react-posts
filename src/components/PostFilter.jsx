import React from "react";
import Input from "../UI/input";
import Select from "../UI/select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
