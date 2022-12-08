import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Card(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Mollitia, ratione!
          Molestias incidunt deleniti consectetur. Laudantium tenetur corporis
          harum porro dicta! Esse iusto voluptas ullam deserunt! Quibusdam alias
          laboriosam deleniti similique illum! Cum quis, illo maiores debitis
          ducimus nobis accusamus nisi pariatur accusantium praesentium vel
          veritatis provident dolorem inventore doloremque natus neque
          laboriosam autem ipsa iusto? Temporibus velit reiciendis commodi.
          Earum maiores omnis aliquam, molestias quod recusandae neque libero
          quos explicabo?
        </div>
      </Collapse>
    </>
  );
}

export default Card;
