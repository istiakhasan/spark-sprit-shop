/* eslint-disable @next/next/no-img-element */
"use client";
import { Pagination } from "@mui/material";
import BlogStickeySection from "../_blogComponent/BlogStickeySection";
import blogSingleImage from "/public/assets/img/blogsingle.jpg";
import avatar1 from "/public/assets/img/avatar1.jpg";
import newUser from "/public/assets/new_user.svg";
import Image from "next/image";
import '../blog.css'
const BlogDetails = () => {
  return (
    <div className="main_body_container">
      <div className="pt-4">
        <div style={{ minHeight: "80vh" }}>
          <div className="container ">
            <div className="row">
            <div className="col-12 col-md-9">
                    <Image className="w-100" src={blogSingleImage} alt="me" width={"100%"} height={"100%"} />
                    <div className="blog-read shadow-lg bg-white">
                        <h2>Ei pro alia placerat theophrastus</h2>
                        <div className="blog-wraper mb-3">
                            <i className='bx bx-conversation'></i>
                            <span>Category</span>
                            <i className='bx bxs-category bx-burst' style={{color:"rgba(0,0,0,0.89)"}}></i>
                            <span>23/12/15</span>
                            <i className='bx bx-data' style={{color:"rgba(0,0,0,0.89)"}}></i>
                            <span>Admin</span>
                            <i className='bx bxs-contact'></i>
                            <span>(14) Comments</span>
                        </div>
                        <div className="blog-wrapper-text">
                            <span>A</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam doloremque suscipit
                                nostrum, consequatur at aperiam quo? Placeat quisquam explicabo eveniet illum, beatae
                                quibusdam commodi pariatur excepturi ducimus porro. Tempora, non ratione earum
                                obcaecati, soluta ut et, commodi laudantium ipsum illo placeat explicabo culpa
                                voluptatem reiciendis similique fugit fuga iusto sunt quam quas tempore. Aut magnam
                                labore rerum qui quo voluptatibus quam, illo tenetur fugiat minus exercitationem veniam
                                temporibus libero nihil odio praesentium. Totam facere ea in, dolorem sapiente, aperiam
                                ratione, mollitia perferendis placeat quis dolores? Necessitatibus eum aperiam impedit
                                enim accusamus vitae tempore nisi nesciunt facilis! Placeat, repellendus nisi?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam doloremque suscipit
                                nostrum, consequatur at aperiam quo? Placeat quisquam explicabo eveniet illum, beatae
                                quibusdam commodi pariatur excepturi ducimus porro. Tempora, non ratione earum
                                obcaecati, soluta ut et, commodi laudantium ipsum illo placeat explicabo culpa
                                voluptatem reiciendis similique fugit fuga iusto sunt quam quas tempore. Aut magnam
                                labore rerum qui quo voluptatibus quam, illo tenetur fugiat minus exercitationem veniam
                                temporibus libero nihil odio praesentium. Totam facere ea in, dolorem sapiente, aperiam
                                ratione, mollitia perferendis placeat quis dolores? Necessitatibus eum aperiam impedit
                                enim accusamus vitae tempore nisi nesciunt facilis! Placeat, repellendus nisi?</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="py-4">Comments</h5>
                    </div>
                  {
                    [...Array(5).keys()].map(item=>(
                        
                    <div key={item} className="blog-wraper-image d-flex  gap-5">
                    <div className="">
                        
                        <Image className="rounded-circle"  src={avatar1} alt="me" width={"100%"} height={"100%"} />
                    </div>
                    <div className="blog-wraper-comments mb-3 p-3">
                        <p> By <span className="text-primary">Anna Smith</span> | 25/10/2019 | </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur libero magni
                            veritatis, facere sequi quis mollitia, quo nisi quaerat tempore est, repellendus
                            nesciunt corporis unde illum nemo numquam iste! Quae alias maxime perferendis, saepe qui
                            esse architecto. Unde velit voluptate esse soluta. </p>
                    </div>
                </div>
                    ))
                  }
            
               
                    <div className="blog-wrapper-footer  ">                    
                        <h5 className="py-3">Leave a comment</h5>
                        <input className="form-control" type="text" placeholder="comment" />
                        <button type="button" className="mt-3 btn btn-primary ">Submit</button>
                    </div>
                </div>
              <BlogStickeySection />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;
