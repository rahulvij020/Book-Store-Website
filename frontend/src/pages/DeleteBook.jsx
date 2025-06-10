import {useState} from "react";
import { useSnackbar } from "notistack";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  const handleDeleteButton = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(()=>{
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully",{variant:'success'});
        navigate('/');
    })
    .catch((err) => {
        setLoading(false);
        console.log(err);
        enqueueSnackbar("Error",{variant:'error'});
    })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
