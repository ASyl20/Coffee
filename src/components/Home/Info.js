import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info(){
    return(
        <section className="py-5">
            <div className="container">
            <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, neque. Ab illum iure repudiandae exercitationem aliquid quaerat nihil quasi error omnis atque esse maiores ipsa dolores id officia deleniti vel, reprehenderit inventore hic amet blanditiis! Praesentium nemo autem tempore voluptatum fuga sed quam excepturi, distinctio facilis quisquam quas, quasi consequatur totam impedit eos blanditiis quidem minima, ipsum deserunt recusandae iste. Ratione officiis explicabo, alias voluptate ad minima et, similique officia assumenda, tenetur voluptatum a ipsa debitis! Iste maxime odio, debitis quo voluptate quisquam ducimus blanditiis corporis sint! Laudantium voluptates iusto, ipsa sed adipisci non labore! Nemo labore repudiandae ullam fugiat?</p>
                         <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                         </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}