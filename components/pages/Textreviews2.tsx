import styles from "./Textreviews2.module.css";
import image_in from "../../image_in.svg";

const TextReviews2 = () => {
  return (
    <>
      {/* <div className="review-wrapper"></div> */}
      <div className={styles.back}>
        <div className={styles.review_wrapper}>
          What Our Customer Say <br />
          About Us
        </div>
        <div className={styles.box}>
          <div className={styles.review_p}>
            <div className={styles.review_p1}>
              <div className={styles.image_in}>
                <img className="img" src="/images/vector.svg" alt="infosys" />
              </div>
              "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in
              the rapidly evolving tech world, I appreciate the up-to-date content and engaging
              multimedia.
              <div className={styles.image_small}>
                <img src="/images/image_3.svg" alt="infosys" />
                <div className={styles.heding}>
                  <h5 className={styles.heding2}>Jane Doe</h5>
                  <p className={styles.para}>Designer</p>
                </div>
              </div>
            </div>
            <div className={styles.review_p2}>
              <div className={styles.image_in}>
                <img className="img" src="/images/vector.svg" alt="infosys" />
              </div>
              "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in
              the rapidly evolving tech world, I appreciate the up-to-date content and engaging
              multimedia.
              <div className={styles.image_small}>
                <img src="/images/image_3.svg" alt="infosys" />
               <div className={styles.heding}>
                  <h5 className={styles.heding2}>Jane Doe</h5>
                  <p className={styles.para}>Designer</p>
                </div>
              </div>
            </div>

            <div className={styles.review_p3}>
              <div className={styles.image_in}>
                <img className="img" src="/images/vector.svg" alt="infosys" />
              </div>
              "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in
              the rapidly evolving tech world, I appreciate the up-to-date content and engaging
              multimedia.
              <div className={styles.image_small}>
                <img src="/images/image_3.svg" alt="infosys" />
                <div className={styles.heding}>
                  <h5 className={styles.heding2}>Jane Doe</h5>
                  <p className={styles.para}>Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextReviews2;
