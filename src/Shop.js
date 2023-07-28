export function Shop() {
  return (
    <>
      <nav className="navbar bg-dark mb-2" data-bs-theme="dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Shop
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </nav>

      <main className="container">
        <div className="row gy-3">
          <div className="col-sm-4 col-lg-3 col-xl-2">
            <h3>Categories</h3>
            <ul className="list-group">
              <li className="list-group-item active">Todas</li>
              <li className="list-group-item">smartphones</li>
              <li className="list-group-item">laptops</li>
              <li className="list-group-item">fragrances</li>
            </ul>
          </div>

          <div className="col">
            <h3>Products</h3>
            <div className="row gy-3">
              <div className="col-lg-6">
                <div className="card">
                  <img
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    className="card-img-top"
                    alt="iPhone 9"
                  />
                  <div className="card-body">
                    <span className="float-end badge text-bg-secondary">
                      smartphones
                    </span>
                    <h5 className="card-title">Microsoft Surface Laptop 4</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Apple
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning text-dark text-end"
                        style={{ width: "80%" }}
                      >
                        4.69
                      </div>
                    </div>
                    An apple mobile which is nothing like apple
                    <div>
                      <div
                        className="btn-group btn-group-sm float-end"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          disabled
                        >
                          &minus;
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          0
                        </button>
                        <button type="button" className="btn btn-success">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="mt-4">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    <span>&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
