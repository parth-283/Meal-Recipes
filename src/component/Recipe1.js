import React from "react";
import contact from "../images/DemoRecipe.jpg";
import "../style/recipe.css";

function Recipe1() {
  return (
    <>
      <div className="container ">
        <div className="card mb-3 ">
          <div className="w-our">
            <img src={contact} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h2 className="card-title card-title-our">
              Sitafal Basundi Recipe1
            </h2>
            <p className="my-3">
              <span>🍴 2 Servings</span> <span>🕛 15 Minutes</span>
            </p>
            <p className="card-text my-5">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div>
              <div class="d-flex mt-5">
                <div class="p-2 w-25 border border-2 border-dark parent-div">
                  <div className="child-div">🌿</div>
                  <div>
                    <h2 className="card-heading">Ingredients</h2>
                  </div>
                  <div>
                    <ol>
                      <li>1 Litre Milk</li>
                      <li> Sitafal Pulp</li>
                      <li>Dry fruits to Garnish</li>
                    </ol>
                  </div>
                </div>
                <div class="ms-5 p-2">
                  <div>
                    <h2 className="card-heading">introduction</h2>
                  </div>
                  <div>
                    <ol>
                      <li>
                        Pour 1 litre milk in a pan. Boil and reduce it on low
                        flame so it turns thick.
                      </li>
                      <li> Then let it cool for sometime.</li>
                      <li>
                        Use seed sitafal or custard apple. Scoop out the pulp
                        from fresh sitafal and add the pulp to the cooled milk
                        and mix it well.
                      </li>
                      <li>
                        Pour it in a glass and garnish it with dryfruits and
                        your Sitafal Basundi is ready to serve.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-text">
              <small className="text-muted">
                Key Ingredients: Milk, Sitafal Pulp, Dry fruits to Garnish
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe1;
