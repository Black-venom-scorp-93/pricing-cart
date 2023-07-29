import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingTable = () => {
  return (
    <section className="pricing py-5">
      <Container>
        <Row>
          {/* Free Tier */}
          <Col lg={4}>
            <Card className="mb-5 mb-lg-0">
              <Card.Body>
                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FaCheck /></span>Single User</li>
                  <li><span className="fa-li"><FaCheck /></span>5GB Storage</li>
                  <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                  <li className="text-muted"><span className="fa-li"><FaTimes /></span>Unlimited Private Projects</li>
                  <li className="text-muted"><span className="fa-li"><FaTimes /></span>Dedicated Phone Support</li>
                  <li className="text-muted"><span className="fa-li"><FaTimes /></span>Free Subdomain</li>
                  <li className="text-muted"><span className="fa-li"><FaTimes /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button className="btn btn-primary text-uppercase">Button</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="mb-5 mb-lg-0">
              <Card.Body>
                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FaCheck /></span><strong>5 Users</strong></li>
                  <li><span className="fa-li"><FaCheck /></span>50GB Storage</li>
                  <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                  <li><span className="fa-li"><FaCheck /></span>Unlimited Private Projects</li>
                  <li><span className="fa-li"><FaCheck /></span>Dedicated Phone Support</li>
                  <li><span className="fa-li"><FaCheck /></span>Free Subdomain</li>
                  <li className="text-muted"><span className="fa-li"><FaTimes /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button className="btn btn-primary text-uppercase">Button</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Pro Tier */}
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><FaCheck /></span><strong>Unlimited Users</strong></li>
                  <li><span className="fa-li"><FaCheck /></span>150GB Storage</li>
                  <li><span className="fa-li"><FaCheck /></span>Unlimited Public Projects</li>
                  <li><span className="fa-li"><FaCheck /></span>Community Access</li>
                  <li><span className="fa-li"><FaCheck /></span>Unlimited Private Projects</li>
                  <li><span className="fa-li"><FaCheck /></span>Dedicated Phone Support</li>
                  <li><span className="fa-li"><FaCheck /></span><strong>Unlimited</strong> Free Subdomains</li>
                  <li><span className="fa-li"><FaCheck /></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button className="btn btn-primary text-uppercase">Button</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingTable;

