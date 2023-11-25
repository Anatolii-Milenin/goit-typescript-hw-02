/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
}
class Page<T extends PageProps> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
