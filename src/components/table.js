import React from 'react';
import { Table, Divider, Tag,Column } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default class MyTable extends React.Component{
    showModal=(hash)=>{
      this.props.showModal(hash);
    }
    
    render(){
        const columns = [
            {
              title: 'Hash',
              dataIndex: 'hash',
              key: 'hash',
            },
            {
              title: 'Height',
              dataIndex: 'height',
              key: 'height',
            },
            {
              title: 'Time',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'View',
              render: (text, record) => (
                <span>
                  <a href="javascript:;" onClick={()=>{
                      this.showModal(record.hash)}}>Details</a>
                </span>
              ),
            },
          ];
          
        return(
            <div style={{width:'100%'}}>
              <Table columns={columns} dataSource={this.props.data} />
            </div>
        )
    }

}