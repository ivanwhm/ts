const post = {
  title: "Latest TypeScript News",
  daysOld: 0,
  published: true,
};

const printPost = (postToPrint: {
  title: string;
  daysOld: number;
  published: boolean;
}) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old).`;
};
