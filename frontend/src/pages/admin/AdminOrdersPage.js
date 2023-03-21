import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
const AdminOrdersPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />
            </Col>

            <Col md={10}>
                <h1>Orders</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Payment method</th>
                            <th>Order details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>Mark Twain</td>
                                <td>2022-03-23</td>
                                <td>$123</td>
                                <td>
                                    <i className={item}></i>
                                </td>
                                <td>Paypal</td>
                                <td>
                                    <Link to="/admin/order-details">Go to order</Link>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default AdminOrdersPage;