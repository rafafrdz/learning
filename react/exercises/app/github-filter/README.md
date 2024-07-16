# Build the Github Issue Filter component

> This repository is the companion to the ["Build the Github Issue Filter component"](https://reactpractice.dev/exercise/build-the-github-issue-filter-component/?utm_source=github&utm_medium=social&utm_campaign=github-issue-filter-component) practice exercise.

On the "Github Issues" page of a repository, you can filter the issues by Milestones, Projects and more.
Build a generic `Filter` component that you could use for filtering milestones, authors and labels.

- the component should have a button that when clicked opens the list of items
- the filtering should be done client side (i.e. load all data up front and pass it to the component)
- clicking outside the items list should close the filter

You can use Tailwind UI for styling, Floating UI (formerly Popper) for displaying the items container and React Icons for the icons.
Use the real Github API to fetch the data.

To get started, clone this starter repo that already comes preconfigured with the data fetching code, so you can focus on building the component.

When you're ready to check your work, check out [the official solution](https://reactpractice.dev/solution/tutorial-build-the-github-issue-filter-component/?utm_source=github&utm_medium=social&utm_campaign=github-issue-filter-component).

## Getting started:

- `npm install`
- `npm run dev`

Build the generic filter under `src/components/GithubFilter.jsx`.
Once you know what props are expected, update the `MilestoneFilter`, `LabelFilter` and `AuthorFilter` as well.
