require 'rails_helper'

RSpec.describe Board, type: :model do
  before :each do
    @board = Board.new(name: 'A new Board')
  end

  subject { @board }

  context 'name is not available' do
    before :each do
      @board.name = ''
    end

    it { should_not be_valid }
  end

end
