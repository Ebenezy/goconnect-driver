import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faSearch,
  faAngleRight,
  faArrowRight,
  faArrowLeft,
  faLock,
  faBars,
  faAngleLeft,
  faPlay,
  faBan,
  faExclamationCircle,
  faCaretDown,
  faBackspace,
  faUserLock,
  faLockOpen,
  faCalendarCheck,
  faDotCircle,
  faUpload,
  faPlus,
  faExclamation,
  faBriefcase,
  faPhone,
  faMapMarkerAlt,
  faPhoneSquareAlt,
  faPaperPlane,
  faDownload,
  faEnvelope,
  faTrashAlt,
  faUser,
  faBell,
  faChevronUp,
  faChevronDown,
  faUsers,
  faCaretRight,
  faPowerOff,
  faChevronRight,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookSquare,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faFacebookSquare,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faUserSecret,
  faExclamation,
  faSearch,
  faAngleRight,
  faBan,
  faArrowRight,
  faArrowLeft,
  faLock,
  faBars,
  faAngleLeft,
  faPlay,
  faExclamationCircle,
  faCaretDown,
  faBackspace,
  faUserLock,
  faLockOpen,
  faCalendarCheck,
  faDotCircle,
  faUpload,
  faPlus,
  faBriefcase,
  faPhone,
  faMapMarkerAlt,
  faPhoneSquareAlt,
  faPaperPlane,
  faDownload,
  faEnvelope,
  faTrashAlt,
  faUser,
  faBell,
  faChevronUp,
  faChevronDown,
  faUsers,
  faCaretRight,
  faPowerOff,
  faChevronRight,
  faPhoneSquare,
  faMapMarkerAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
