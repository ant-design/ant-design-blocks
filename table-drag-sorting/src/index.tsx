import React from "react";
import styles from "./index.less";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";

const type = "DragbleBodyRow";

const DragableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? " drop-over-downward" : " drop-over-upward"
      };
    },
    drop: item => {
      moveRow(item.index, index);
    }
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

class DragSortingTable extends React.Component {
  state = {
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      }
    ]
  };

  components = {
    body: {
      row: DragableBodyRow
    }
  };

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
        }
      })
    );
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <Table
          columns={columns}
          dataSource={this.state.data}
          components={this.components}
          onRow={(record, index) => ({
            index,
            moveRow: this.moveRow
          })}
        />
      </DndProvider>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-drag-sorting">
      <DragSortingTable />
    </div>
  </div>
);
