import React from "react";
import { Panel, Well, Row, Col, Button } from "react-bootstrap";

const ResultPanel = props => (
  <Panel>
    <Panel.Heading className="text-center">
      <Panel.Title>
        <h1>Results</h1>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      {props.articles.length ? 
        props.articles.filter((article, i) => i < 5).map((article, i) => {
          let [year, month, rest] = article.pub_date.split("-");
          let pub_date = `${month}-${rest[0]}${rest[1]}-${year}`;         
          
          return (
            <Well className="article" key={article._id}>
              <Row>
                <Col xs={12} md={8}>
                  <a target="_blank" href={article.web_url}>
                    <h3>{article.headline.main}</h3>
                  </a>
                  <h5>Publish Date: {pub_date}</h5>
                </Col>
                <Col className="text-right" xs={12} md={4}>
                  <Button 
                    bsStyle="success" 
                    onClick={() => props.saveArticle(i, {
                      apiId  : article._id,
                      title  : article.headline.main,
                      url    : article.web_url,
                      pubDate: article.pub_date
                    })}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Well>
          );
        })
      : (
        <h3>No Articles to Display</h3>
      )}
    </Panel.Body>
  </Panel>
);

export default ResultPanel;
