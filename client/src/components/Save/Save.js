import React from "react";
import { Panel, Well, Row, Col, Button } from "react-bootstrap";

const Save = props => (
  <Panel>
    <Panel.Heading className="text-center">
      <Panel.Title>
        <h1>Saved</h1>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      {props.articles.length ? 
        props.articles.map((article, i) => {
          let [year, month, rest] = article.saveDate.split("-");
          let save_date = `${month}-${rest[0]}${rest[1]}-${year}`;         
         
          return (
            <Well className="article" key={article._id}>
              <Row>
                <Col xs={12} md={8}>
                  <a target="_blank" href={article.url}>
                    <h3>{article.title}</h3>
                  </a>
                  <h5>Publish Date: {article.pubDate}</h5>
                  <h5>Save Date: {save_date}</h5>
                </Col>
                <Col className="text-right" xs={12} md={4}>
                  <Button 
                    bsStyle="success" 
                    onClick={() => props.deleteArticle(article._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Well>
          );
        })
      : (
        <h3>No Saved Articles to Display</h3>
      )}
    </Panel.Body>
  </Panel>
);

export default Save;
