
let posts = document.getElementById('posts');

axios.get("https://tarmeezacademy.com/api/v1/posts")
    .then((response) => {
        posts.innerHTML = response.data.data.map((post) => {  
            let author = post.author;      
            return `
            <div class="post shadow mt-5 mb-5">
                        <div class="card">
                            <!--header of card  -->
                            <div class="card-header">
                                <img src=${author.profile_image || "./images/Logo.png"} alt="" style="width: 50px; height: 50px;">
                                <b>${author.name}</b>
                            </div>
                            <!--header of card  -->
                            <!--body-->
                            <div class="card-body">
                                <img src="${post.image}" alt="post1" class="w-100">
                                <h6 class="text-muted mt-2">
                                    ${post.created_at}
                                </h6>
                                <h5 class="mt-2">
                                   ${post.title}
                                </h5>
                                <p class="mt-2">
                                    ${post.body}
                                </p>
                                <hr>
                                <!--comments -->
                                <div class="d-flex justify-content-between mt-2 mb-2">
                                    <div class="d-inline">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-chat me-2" viewBox="0 0 16 16">
                                            <path
                                                d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                        </svg>
                                        <span class="text-muted ">${post.comments_count} comments</span>
                                    </div>
                                </div>
                                <!--comments-->
                            </div>
                            <!--body-->
                        </div>
                    </div>
            `
        }).join('');
   
    });
