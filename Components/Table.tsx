import React from "react";
import MUIDataTable from "mui-datatables";
import Avatar from "@mui/material/Avatar";
import Link from 'next/link'
type Props = {};

const linkToImage = (value: string) => {
  return <Avatar variant="rounded" src={value} >
  </Avatar>
};

const idtoLink = (value: string, rollno: string) => {
  return <Link href={`/student/${value}` } >
    {rollno}
  </Link>
};

const toEdit = (value: string) => {
  return <Link href={`/student/${value}/edit` } >
    Edit
  </Link>
};

interface Data {
  id: string;
  avatar: string;
  name: string;
  rollno: string;
  email: string;
  percentage: string;
}

const Table = (props: Props) => {

   const [data, setData] = React.useState<Data[]>([]);
  React.useEffect(() => {
  fetch("/api/teacher/students", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  }, []);

  const dataaa = data.map((item) => {
    return {  
      id: item.id,
      avatar: linkToImage(item.avatar),
      name: item.name,
      rollno: idtoLink(item.id,item.rollno),
      email: item.email,
      percentage: item.percentage,
      edit: toEdit(item.id),
    };
  });


  const dataa = [
    {
      id: "642559d2f50e874264f67519",
      avatar:
        linkToImage("https://upcdn.io/W142hJk/image/demo/4mYmwSqzE8.jpg?w=600&h=600&fit=max&q=70"),
      name: "ritesh",
      rollno: "1",
      email: "riteshmestrypro@gmail.com",
    },
    {
      id: "64255f0f96a0213abffae9e0",
      avatar:
      linkToImage("https://upcdn.io/W142hJk/image/demo/4mYmpbzg9U.jpeg?w=600&h=600&fit=max&q=70"),
      name: "Sagar Agicha",
      rollno: "2",
      email: "saagicha1601@gmail.com",
    },
    {
      id: "64257d406c3c80fef3b4707b",
      avatar:
      linkToImage("https://upcdn.io/W142hJk/image/demo/4mYm963aG5.jpg?w=600&h=600&fit=max&q=70"),
      name: "Jenil Shah",
      rollno: "3",
      email: "jenilshah0909@gmail.com",
    },
    {
      id: "6425852ba9e5259a2ed5089a",
      avatar:
        linkToImage("https://upcdn.io/W142hJk/image/demo/4mYkxZY3Fo.jpg?w=600&h=600&fit=max&q=70"),
      name: "Vaibhav Gawad",
      rollno: "4",
      email: "gawadvaibhavv@gmail.com",
    },
  ];


  const columns = [ "rollno","avatar", "name", "email","percentage",'edit'];

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];
  const options = {
    filterType: "checkbox",
    
  };

  return (
      <MUIDataTable
        title={"Student Details "}
        data={dataaa}
        columns={columns}
        options={options}
      />
  );
};

export default Table;
