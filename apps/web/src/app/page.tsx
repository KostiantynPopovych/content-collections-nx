import styles from './page.module.css';
import {allPosts} from "../../.content-collections/generated";

export default function Index() {
  return `We have a post named ${allPosts[0]!.title} with the following summary ${allPosts[0]!.summary}`
}
