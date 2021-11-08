import data from ./countries.json


<Card key= {data.id}>
  <Card.Body>
    <Card.Title>{ data.name}</Card.Title>
    <Card.Text>
          {data.desc}
    </Card.Text>

    <a className="btn-primary"
      href={data.url}
      target="_blank"
      rel=" noopener noreferrer"
       >
      >
      Download
    </a>

  </Card.Body>
</Card>
