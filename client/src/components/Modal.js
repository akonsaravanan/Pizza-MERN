import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteCartBycartId } from "../redux/api";
import { toast } from "react-toastify";
const RemoveCart = (props) => {
	console.log({ ...props });
	const deleteCart = () => {
		props.onHide();
		toast.success("Pizza Deleted!");
		deleteCartBycartId(props.pizza._id);
		window.location.reload();
	};
	return (
		<Modal {...props} size="m" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<h4>You sure want to remove this pizza</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={deleteCart}>
					Remove
				</Button>
				<Button onClick={props.onHide}>Cancel</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default RemoveCart;
// onClick={dispatch(deleteCartBycartId(props.id))}
