import { shallowMount } from "@vue/test-utils";
import UploadForm from "@/containers/UploadForm.vue";

describe.only("UploadForm", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(UploadForm);
    expect(wrapper).toMatchSnapshot();
  });
});
