"use client";
import { useGetPrifileInfoQuery } from "@/redux/api/profile";
import "./profile.css";
import moment from "moment";

const Profile = () => {
  const { data } = useGetPrifileInfoQuery(undefined);
  const profileData = data?.data
  console.log(data, "data");
  return (
    <div>
      <h5> My Profile </h5>
      <div className="db_common_body">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Full name</h3>
              <div class="my-profile-item-info">istiak.excelitai</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">
                <span>Email Address</span> <span class="gray">|</span>{" "}
                <a data-spm="demail_change">Change</a>
              </h3>
              <div class="my-profile-item-info">{profileData?.email}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item"><h3 class="my-profile-item-title">Mobile <span class="gray">|</span> <a data-spm="dmobile_add">Add</a></h3><div class="my-profile-item-info"><span class="gray">{ profileData?.phone}</span></div></div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Birth Day</h3>
              <div class="my-profile-item-info">{ moment(profileData?.date_of_birth).format('DD MMMM YYYY  ')}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Gender</h3>
              <div class="my-profile-item-info">{ profileData?.gender || "--"}</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div class="my-profile-item">
              <h3 class="my-profile-item-title">Country</h3>
              <div class="my-profile-item-info">{ profileData?.country?.label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
