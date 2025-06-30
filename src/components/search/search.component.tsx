import { Space } from "antd";
import { Input } from "antd";
import { useEffect, useMemo } from "react";
import { ITableData } from "../../interfaces/interfaces";
import useFilteredData from "../../hooks/useFilteredData";
import useStore from "../../store";

const { Search } = Input;

interface SearchComponentProps {
  tableData: ITableData[];
  onSearchValue: (value: string) => void;
  searchValue: string;
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
  const filteredData = useFilteredData(props.searchValue, props.tableData);

  useEffect(() => {
    useStore.getState().getFilteredTableData(filteredData);
  }, [filteredData]);

  return (
    <Space direction="vertical">
      <Search
        placeholder="Введите имя, дату или значение..."
        value={props.searchValue}
        onChange={(e) => props.onSearchValue(e.target.value)}
        onSearch={() => {}}
      />
    </Space>
  );
};

export default SearchComponent;
