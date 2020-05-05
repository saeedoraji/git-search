import React, { Suspense } from "react";
import { mount } from "enzyme";
import { SearchResult, importRepos } from "./SearchResult";
import { create } from "react-test-renderer";
import { mockData } from "./mockData";

describe("<SearchResult />", () => {
  it("Render user list", () => {
    const wrapper = mount(<SearchResult users={mockData} />);
    expect(wrapper.find(".panel-text").length).toEqual(mockData.length);
  });

  it("Load Repos", async () => {
    const root = create(
      <Suspense fallback={<div>loading...</div>}>
        <SearchResult />
      </Suspense>
    );
    await importRepos;
    expect(root).toMatchSnapshot();
  });
});
