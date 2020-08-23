use yew::{
  Html, Properties
};

pub struct Explorer {
  props: Props,
}

#[derive(Properties, Clone)]
pub struct Props {
  #[prop_or_default]
  pub path: Option<String>
}

impl Component for Explorer {
  type Message = ();
  type Properties = Props;

  fn view(&self) -> Html {

  }
}