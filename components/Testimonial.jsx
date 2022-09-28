import React from "react";
import { Avatar } from "@mui/material";

function Testimonial() {
  return (
    <section class="testimonials-container">
      <span class="subheading">Testimonials</span>
      <h2 class="heading-secondary">Once you dress well , you can't go back</h2>

      <div class="testimonials">
        <figure class="testimonial">
          <Avatar
            alt="Betty G"
            src="/static/images/avatar/1.jpg"
            className="avatar-size"
          />

          <blockquote class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            tempora quaerat optio sit natus aperiam autem architecto nam,
            repudiandae, aspernatur, maxime at consectetur possimus aliquam
            dolorum doloremque molestias illo ducimus?
          </blockquote>
          <p class="testimonial-name">&mdash; Betty G</p>
        </figure>

        <figure class="testimonial">
          <Avatar
            alt="Veronica"
            src="/static/images/avatar/2.jpg"
            className="avatar-size"
          />
          <blockquote class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque
            doloribus blanditiis quisquam expedita cum accusamus reprehenderit
            enim facere tempore molestiae, voluptate laborum a minima numquam
            dolorem laboriosam officia. Possimus.
          </blockquote>
          <p class="testimonial-name">&mdash; Veronica H</p>
        </figure>

        <figure class="testimonial">
          <Avatar
            alt="Tirunesh D"
            src="/static/images/avatar/3.jpg"
            className="avatar-size"
          />
          <blockquote class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, magni! Deleniti obcaecati recusandae deserunt? Aperiam
            officia quas, aut voluptates recusandae laborum natus ea illo saepe
            eveniet dolor culpa aspernatur modi?
          </blockquote>
          <p class="testimonial-name">&mdash; Tirunesh D</p>
        </figure>

        <figure class="testimonial">
          <Avatar
            alt="Deraretu T"
            src="https://i.pinimg.com/originals/52/63/23/526323fd2807e2dda85bfa3f0f51f674.jpg"
            className="avatar-size"
          />
          <blockquote class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
            mollitia tempore cum numquam assumenda perspiciatis omnis nihil
            consequuntur velit dolores, itaque, dignissimos voluptatibus quae!
            Unde sequi neque nemo odit deserunt.
          </blockquote>
          <p class="testimonial-name">&mdash; Deraretu T</p>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
