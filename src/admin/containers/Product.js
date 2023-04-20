import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';



function Product(props) {

    const [open, setOpen] = React.useState(false);
    const [Dopen, setDopen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [Did, setDid] = React.useState(0);
    const [update, setUpdate] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Product Name."),
        price: yup.string().required("Please Enter Product Price."),
        quantity: yup.string().required("Please Enter Product Quantity.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            update ?
                handleUpdate(values)
                :
                handleAdd(values)
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formik;

    const handleAdd = (values) => {

        let id = Math.floor(Math.random() * 1000)

        let data = {
            id: id, ...values
        }

        let SessionStorage = JSON.parse(sessionStorage.getItem("Products"))

        if (SessionStorage === null) {
            sessionStorage.setItem("Products", JSON.stringify([data]));
        } else {
            SessionStorage.push(data)
            sessionStorage.setItem("Products", JSON.stringify(SessionStorage));
        }

        setUpdate(false)
        getData()
        handleClose();
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 110
        },
        {
            field: '',
            headerName: 'Actions',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }
    ];

    useEffect(
        () => {
            getData()
        },
        [])

    const getData = () => {
        let SessionStorage = JSON.parse(sessionStorage.getItem("Products"))
        if (SessionStorage !== null) {
            setData(SessionStorage)
        }
    }

    const handleDelete = (data) => {
        setDopen(true)
        setDid(data.id)
    }

    const handleDeleteData = () => {
        let SessionStorage = JSON.parse(sessionStorage.getItem("Products"));

        let dData = SessionStorage.filter((l) => l.id !== Did)

        sessionStorage.setItem("Products", JSON.stringify(dData));

        setData(dData)
        setDopen(false)
    }

    const handleEdit = (data) => {
        setOpen(true)
        formik.setValues(data)
        setUpdate(true)
    }

    const handleUpdate = (data) => {

        let SessionData = JSON.parse(sessionStorage.getItem("Products"))

        let uData = SessionData.map((l) => {
            if (l.id === data.id) {
                return data;
            } else {
                return l;
            }
        })


        setData(uData)
        sessionStorage.setItem("Products", JSON.stringify(uData))
        handleClose();
    }

    return (
        <>
            <div>
                <h1>Product</h1>
            </div>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    ADD NEW PRODUCT
                </Button>

                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </Box>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Product</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ""}</p>

                                <TextField
                                    margin="dense"
                                    id="price"
                                    name="price"
                                    label="Price"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.price && touched.price ? errors.price : ""}</p>

                                <TextField
                                    margin="dense"
                                    id="quantity"
                                    name="quantity"
                                    label="Quantity"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.quantity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.quantity && touched.quantity ? errors.quantity : ""}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>{update ? "Update" : "Add"}</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>

                <Dialog open={Dopen} onClose={handleClose}>
                    <DialogTitle>Are You Sure?</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button type='submit' onClick={() => handleDeleteData()}>Yes</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default Product;