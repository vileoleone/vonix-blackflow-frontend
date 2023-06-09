import ImportMailingPage from "@/pages/ImportMailingPage.vue";
export default {
  title: 'Pages/MailingPages',
  component: ImportMailingPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    innerBackgroundColor: {
      control: 'color',
    },
    onClick: {control: {actions: 'clicked'}},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const MailingPageStory = {
  render: (args) => ({
    components: { ImportMailingPage },
    setup() {
      return { args };
    },
    template: '<ImportMailingPage v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Fila',
    backgroundColor: '#FFFFFF',
  },
};